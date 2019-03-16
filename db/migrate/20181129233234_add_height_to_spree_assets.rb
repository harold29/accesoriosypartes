class AddHeightToSpreeAssets < ActiveRecord::Migration[5.2]
  def change
    add_column :spree_assets, :height, :integer
  end
end
