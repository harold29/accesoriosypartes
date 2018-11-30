Spree::Taxon.class_eval do
  has_one :menu_icon, as: :viewable, dependent: :destroy, class_name: "Spree::TaxonIcon"
end
