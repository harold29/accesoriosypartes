class ChangeXToFloat < ActiveRecord::Migration[5.2]
  def change
    change_column :spree_assets, :x, :float
  end
end
