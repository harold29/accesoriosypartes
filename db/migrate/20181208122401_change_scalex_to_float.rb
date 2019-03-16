class ChangeScalexToFloat < ActiveRecord::Migration[5.2]
  def change
    change_column :spree_assets, :scalex, :float
  end
end
