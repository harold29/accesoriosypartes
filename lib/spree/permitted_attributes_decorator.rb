Spree::PermittedAttributes.class_eval do
  @@image_attributes = [:alt, :attachment, :position, :viewable_type, :viewable_id, :x, :y, :width, :height, :rotate, :scalex, :scaley]

  @@taxon_attributes = [
    :name, :parent_id, :position, :icon, :menu_icon, :description, :permalink, :taxonomy_id, :meta_description, :meta_keywords, :meta_title, :child_index
  ]
end
