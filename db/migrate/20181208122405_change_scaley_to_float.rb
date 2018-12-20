class ChangeScaleyToFloat < ActiveRecord::Migration[5.2]
  def change
    change_column :spree_assets, :scaley, :float
  end
end
