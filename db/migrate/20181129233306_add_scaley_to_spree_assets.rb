class AddScaleyToSpreeAssets < ActiveRecord::Migration[5.2]
  def change
    add_column :spree_assets, :scaley, :integer
  end
end
