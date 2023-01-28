import React, { forwardRef, useMemo } from "react";
import {
  ResourceStatus,
  ResourceStatusDelayed,
} from "@app/components/ResourceStatusLabel/types";
import {
  Alert,
  Button,
  Flex,
  FlexItem,
  HelperText,
  HelperTextItem,
  Spinner,
  Split,
  SplitItem,
} from "@patternfly/react-core";
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
} from "@patternfly/react-icons";
import { useTranslation } from "@rhoas/app-services-ui-components";
import "./ResourceStatusLabel.css";

export interface ResourceStatusLabelProps {
  status: ResourceStatus;
  creationDelayed?: ResourceStatusDelayed;
}

export const ResourceStatusLabel = forwardRef<
  HTMLButtonElement,
  ResourceStatusLabelProps
>((props, ref) => {
  const { t } = useTranslation(["smartEventsTempDictionary"]);
  const { status, creationDelayed } = props;

  const delayedInfo = useMemo(() => {
    return (
      <>
        {!creationDelayed && (
          <Flex>
            <FlexItem>
              <HelperText>
                <HelperTextItem
                  variant="indeterminate"
                  data-ouia-component-id="ready-shortly"
                  data-ouia-component-type="QE/HelperTextItem"
                >
                  {t("common.thisWillBeReadyShortly")}
                </HelperTextItem>
              </HelperText>
            </FlexItem>
          </Flex>
        )}
        {creationDelayed && (
          <Alert
            variant={creationDelayed}
            isInline
            isPlain
            title={t("common.thisIsTakingLongerThanExpected")}
            ouiaId="longer-than-expected"
          />
        )}
      </>
    );
  }, [creationDelayed, t]);

  switch (status) {
    case ResourceStatus.READY:
      return (
        <Split hasGutter className="mas-c-status">
          <SplitItem>
            <CheckCircleIcon className="mas-m-ready" />
          </SplitItem>
          <SplitItem>{t("common.statuses.ready")}</SplitItem>
        </Split>
      );
    case ResourceStatus.CREATING:
      return (
        <Split hasGutter className="mas-c-status">
          <SplitItem>
            <Spinner size="md" />
          </SplitItem>
          <SplitItem>
            <Button ref={ref} variant={"link"} isInline ouiaId="creating">
              {t("common.statuses.creating")}
            </Button>
            {delayedInfo}
          </SplitItem>
        </Split>
      );
    case ResourceStatus.UPDATING:
      return (
        <Split hasGutter className="mas-c-status">
          <SplitItem>
            <Spinner size="md" />
          </SplitItem>
          <SplitItem>
            <span>{t("common.statuses.updating")}</span>
            {delayedInfo}
          </SplitItem>
        </Split>
      );
    case ResourceStatus.FAILED:
      return (
        <Split hasGutter className="mas-c-status">
          <SplitItem>
            <ExclamationTriangleIcon className="mas-m-failed" />
          </SplitItem>
          <SplitItem>{t("common.statuses.failed")}</SplitItem>
        </Split>
      );
    case ResourceStatus.DELETING:
      return (
        <span className="mas-m-deleting">{t("common.statuses.deleting")}</span>
      );
    default:
      return <></>;
  }
});

ResourceStatusLabel.displayName = "ResourceStatusLabel";
