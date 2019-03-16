class ChangeWidthToFloat < ActiveRecord::Migration[5.2]
  def change
    change_column :spree_assets, :width, :float
  end
end
