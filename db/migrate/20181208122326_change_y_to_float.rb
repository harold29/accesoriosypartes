class ChangeYToFloat < ActiveRecord::Migration[5.2]
  def change
    change_column :spree_assets, :y, :float
  end
end
