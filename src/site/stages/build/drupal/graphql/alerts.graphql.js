/**
 * The alerts that appear above content.
 */

module.exports = `
    alerts:   blockContentQuery(filter: {conditions: [{field: "type", value: "alert"}, {field: "status", value: "1"}]},
    sort: {field: "field_node_reference", direction: DESC}
    limit: 100) {
    entities {
      ... on BlockContentAlert {
        id
        fieldAlertFrequency
        fieldNodeReference {
          targetId
        }
        fieldAlertType
        fieldAlertTitle
        fieldAlertContent {
          entity {
            entityRendered
          }
        }
      }
    }
  }
`;