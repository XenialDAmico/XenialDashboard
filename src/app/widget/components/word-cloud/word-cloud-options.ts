import { Spec } from "vega";

export const WordCloudInitConfig: Spec = {
  "$schema": "https://vega.github.io/schema/vega/v5.json",
  "width": 400,
  "height": 400,
  "autosize": {
    "type": "fit",
    "resize": true,
    "contains": "padding"
  },
  "padding": 5,

  "data": [
    {
      "name": "table",
      "values": [
        "No Whipped, Extra Smiles, Light Drizzle, Super Sweet, Addict Sweet, Girl in Front Seat, No Whip, Xtra Pour, Splenda, Light Sugar, Splenda, Froth, 2 Cups, xtra straw, Extra Sweet, Lite Sweet, 2 Straws, Cute Girl in Front, Make it Hot, Rush, In a Rush",
        "Lite Whipped, More Smiles, More Drizzle, Lite Sweet, Almond Milk, +Sweet , Guy in Backseat, No Whip, Double Pour, 2 Cups, Splenda, Light Sugar, Splenda, Froth, 2 Cups, xtra straw, Extra Sweet, Lite Sweet, 2 Straws, Cute Girl in Front, Make it Hot, Rush, In a Rush",
          
      ],
      "transform": [
        {
          "type": "countpattern",
          "field": "data",
          "case": "upper",
          "pattern": "[\\w']{3,}",
          "stopwords": "(i|me|my|myself|we|us|our|ours|ourselves|you|your|yours|yourself|yourselves|he|him|his|himself|she|her|hers|herself|it|its|itself|they|them|their|theirs|themselves|what|which|who|whom|whose|this|that|these|those|am|is|are|was|were|be|been|being|have|has|had|having|do|does|did|doing|will|would|should|can|could|ought|i'm|you're|he's|she's|it's|we're|they're|i've|you've|we've|they've|i'd|you'd|he'd|she'd|we'd|they'd|i'll|you'll|he'll|she'll|we'll|they'll|isn't|aren't|wasn't|weren't|hasn't|haven't|hadn't|doesn't|don't|didn't|won't|wouldn't|shan't|shouldn't|can't|cannot|couldn't|mustn't|let's|that's|who's|what's|here's|there's|when's|where's|why's|how's|a|an|the|and|but|if|or|because|as|until|while|of|at|by|for|with|about|against|between|into|through|during|before|after|above|below|to|from|up|upon|down|in|out|on|off|over|under|again|further|then|once|here|there|when|where|why|how|all|any|both|each|few|more|most|other|some|such|no|nor|not|only|own|same|so|than|too|very|say|says|said|shall|extra|light)"
        },
        {
          "type": "formula", "as": "angle",
          "expr": "[-45, 0, 45][~~(random() * 3)]"
        },
        {
          "type": "formula", "as": "weight",
          "expr": "if(datum.text=='Sugar', 600, 300)"
        }
      ]
    }
  ],

  "scales": [
    {
      "name": "color",
      "type": "ordinal",
      "domain": {"data": "table", "field": "text"},
      "range": ["#d5a928", "#652c90", "#939597"]
    }
  ],

  "marks": [
    {
      "type": "text",
      "from": {"data": "table"},
      "encode": {
        "enter": {
          "text": {"field": "text"},
          "align": {"value": "center"},
          "baseline": {"value": "alphabetic"},
          "fill": {"scale": "color", "field": "text"}
        },
        "update": {
          "fillOpacity": {"value": 1}
        },
        "hover": {
          "fillOpacity": {"value": 0.5}
        }
      },
      "transform": [
        {
          "type": "wordcloud",
          "size": [{"signal": "width"}, {"signal": "height"}],
          "text": {"field": "text"},
          "rotate": {"field": "datum.angle"},
          "font": "Sans Serif, Arial",
          "fontSize": {"field": "datum.count"},
          "fontWeight": {"field": "datum.weight"},
          "fontSizeRange": [8, 32],
          "padding": 2
        }
      ]
    }
  ]
}
