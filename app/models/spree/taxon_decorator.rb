Spree::Taxon.class_eval do
  has_one :menu_icon, as: :viewable, dependent: :destroy, class_name: 'Spree::TaxonIcon'

  # has_one :icon, as: :viewable, dependent: :destroy, class_name: "Spree::TaxonIcon"

  accepts_nested_attributes_for :menu_icon, allow_destroy: true
end
