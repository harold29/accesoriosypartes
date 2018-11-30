class AddRotateToSpreeAssets < ActiveRecord::Migration[5.2]
  def change
    add_column :spree_assets, :rotate, :integer
  end
end
