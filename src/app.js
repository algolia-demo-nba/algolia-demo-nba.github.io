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
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: `
        <div>
          // Add logo image based on logoUrl attribute to team module
          <img src={{logoUrl}} align="left" alt="{{name}}" width=150 height=125/>
          <div class="hit-description">
          // Add team name attribute to team module
          Team Name:
           {{#helpers.highlight}}{ "attribute": "name" }{{/helpers.highlight}}
         <br />

// Add location attribute to team module
                     Location:
 {{#helpers.highlight}}{ "attribute": "location" }{{/helpers.highlight}}
         <br />
     Conference:

 // Add number of championships attribute to team module
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
// Add conference as a refinement option to UI
  instantsearch.widgets.refinementList({
    container: '#conference-list',
    attribute: 'conference',

  }),
// Add number of championships as a refinement option to UI

    instantsearch.widgets.refinementList({
    container: '#champs-list',
    attribute: 'Number of Championships',

  }),

  instantsearch.widgets.configure({
    hitsPerPage: 8
  }),

]);

search.start();
