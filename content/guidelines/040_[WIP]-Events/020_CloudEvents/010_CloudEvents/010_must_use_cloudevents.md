---
type: MUST
id: R200001
---

# use CloudEvents format to encode events

Events must be encoded as [CloudEvents 1.0.2](https://github.com/cloudevents/spec/blob/v1.0.2/cloudevents/spec.md).

The CloudEvents specification defines a number of required and optional [context attributes](https://github.com/cloudevents/spec/blob/v1.0.2/cloudevents/spec.md#context-attributes). Context attributes can be treated as metadata about the event, that can be extracted without knowing the structure of the event itself.

The guidelines contain some further rules regarding the usage of context attributes:

| Attribute                                                                                              | Further Rules                     |
| ------------------------------------------------------------------------------------------------------ | --------------------------------- |
| [id](https://github.com/cloudevents/spec/blob/v1.0.2/cloudevents/spec.md#id)                           |                                   |
| [source](https://github.com/cloudevents/spec/blob/v1.0.2/cloudevents/spec.md#source-1)                 | TODO create MUST source rule      |
| [specversion](https://github.com/cloudevents/spec/blob/v1.0.2/cloudevents/spec.md#specversion)         | only '1.0' allowed                |
| [type](https://github.com/cloudevents/spec/blob/v1.0.2/cloudevents/spec.md#type)                       | TODO create MUST type naming rule |
| [datacontenttype](https://github.com/cloudevents/spec/blob/v1.0.2/cloudevents/spec.md#datacontenttype) | TODO create MUST rule             |
| [dataschema](https://github.com/cloudevents/spec/blob/v1.0.2/cloudevents/spec.md#dataschema)           | TODO create SHOULD(?) rule        |
| [time](https://github.com/cloudevents/spec/blob/v1.0.2/cloudevents/spec.md#time)                       |                                   |
| [subject](https://github.com/cloudevents/spec/blob/v1.0.2/cloudevents/spec.md#subject)                 |                                   |