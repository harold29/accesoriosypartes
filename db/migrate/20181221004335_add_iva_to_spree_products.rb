class AddIvaToSpreeProducts < ActiveRecord::Migration[5.2]
  def change
    add_column :spree_products, :iva, :float
  end
end
