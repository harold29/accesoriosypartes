class ChangeHeightToFloat < ActiveRecord::Migration[5.2]
  def change
    change_column :spree_assets, :height, :float
  end
end
