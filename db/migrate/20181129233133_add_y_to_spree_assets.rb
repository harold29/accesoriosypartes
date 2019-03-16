class AddYToSpreeAssets < ActiveRecord::Migration[5.2]
  def change
    add_column :spree_assets, :y, :integer
  end
end
