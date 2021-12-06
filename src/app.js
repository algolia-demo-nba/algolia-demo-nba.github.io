const { algoliasearch, instantsearch } = window;

const searchClient = algoliasearch(
  'RYUW2ACCPU',
  '1108b751916ff59448e37f09a5566089'
);

const search = instantsearch({
  indexName: 'dev_NBAEncyclopedia',
  searchClient,
});

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
    placeholder: "Search"
  }),
  // Modules for search results, containing name, location, conference, and logo.
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: `
        <div>

          <img src={{logoUrl}} align="left" alt="{{name}}" width=150 height=125/>
          <div class="hit-description">

          Team Name:
           {{#helpers.highlight}}{ "attribute": "name" }{{/helpers.highlight}}
         <br />

     Location:
 {{#helpers.highlight}}{ "attribute": "location" }{{/helpers.highlight}}
         <br />
     Conference:

 {{#helpers.highlight}}{ "attribute": "conference" }{{/helpers.highlight}}
          <br />
     Championships:  {{#helpers.highlight}}{ "attribute": "Number of Championships" }{{/helpers.highlight}}
        </div>
     </div>
`,
    },
  }),
  instantsearch.widgets.pagination({
    container: '#pagination',
  }),

instantsearch.widgets.clearRefinements({
    container: '#clear-refinements',
  }),
  // Refinements for filtering result
  instantsearch.widgets.refinementList({
    container: '#conference-list',
    attribute: 'conference',

  }),

    instantsearch.widgets.refinementList({
    container: '#champs-list',
    attribute: 'Number of Championships',

  }),

  instantsearch.widgets.configure({
    hitsPerPage: 8
  }),

]);

search.start();
