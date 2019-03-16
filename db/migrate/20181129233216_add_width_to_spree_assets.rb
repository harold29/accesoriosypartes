class AddWidthToSpreeAssets < ActiveRecord::Migration[5.2]
  def change
    add_column :spree_assets, :width, :integer
  end
end
