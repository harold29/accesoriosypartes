class AddScalexToSpreeAssets < ActiveRecord::Migration[5.2]
  def change
    add_column :spree_assets, :scalex, :integer
  end
end
