class AddXToSpreeAssets < ActiveRecord::Migration[5.2]
  def change
    add_column :spree_assets, :x, :integer
  end
end
