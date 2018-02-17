module.exports = {
  // Map of hooks
  hooks: {
    "summary:before": function (summary) {
      summary.content = summary.content.replace('/docs/{{version}}/', '')

      return summary
    }
  },

  // Map of new blocks
  blocks: {},

  // Map of new filters
  filters: {},
};