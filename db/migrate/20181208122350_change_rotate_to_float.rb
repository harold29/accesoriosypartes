class ChangeRotateToFloat < ActiveRecord::Migration[5.2]
  def change
    change_column :spree_assets, :rotate, :float
  end
end
