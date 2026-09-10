require 'bibtex'

module Jekyll
  module BibliographyFields
    # Keep arXiv text and MathJax delimiters intact; the general LaTeX
    # decoding used for citations strips dollar signs from these fields.
    def bibliography_field(bibtex, field)
      entry = BibTeX.parse(bibtex).entries.values.first
      entry[field].to_s if entry
    end
  end
end

Liquid::Template.register_filter(Jekyll::BibliographyFields)
