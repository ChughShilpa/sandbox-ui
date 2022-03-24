/* tslint:disable */
/* eslint-disable */
/**
 * Red Hat Openshift Smart Events Fleet Manager
 * The api exposed by the fleet manager of the RHOSE service.
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: openbridge-dev@redhat.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { KafkaConnectionDTO } from './kafka-connection-dto';
import { ManagedResourceStatus } from './managed-resource-status';
import { ProcessorDefinition } from './processor-definition';

/**
 * 
 * @export
 * @interface ProcessorDTO
 */
export interface ProcessorDTO {
    /**
     * 
     * @type {string}
     * @memberof ProcessorDTO
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof ProcessorDTO
     */
    'name'?: string;
    /**
     * 
     * @type {ProcessorDefinition}
     * @memberof ProcessorDTO
     */
    'definition'?: ProcessorDefinition;
    /**
     * 
     * @type {string}
     * @memberof ProcessorDTO
     */
    'bridgeId'?: string;
    /**
     * 
     * @type {string}
     * @memberof ProcessorDTO
     */
    'customerId'?: string;
    /**
     * 
     * @type {ManagedResourceStatus}
     * @memberof ProcessorDTO
     */
    'status'?: ManagedResourceStatus;
    /**
     * 
     * @type {KafkaConnectionDTO}
     * @memberof ProcessorDTO
     */
    'kafkaConnection'?: KafkaConnectionDTO;
}
