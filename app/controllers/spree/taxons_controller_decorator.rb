# Spree::Admin::TaxonsController.class_eval do
#   def update
#     successful = @taxon.transaction do
#       parent_id = params[:taxon][:parent_id]
#       set_position
#       set_parent(parent_id)
#       # abort
#
#       @taxon.save!
#
#       # regenerate permalink
#       regenerate_permalink if parent_id
#
#       set_permalink_params
#
#       # check if we need to rename child taxons if parent name or permalink changes
#       @update_children = true if params[:taxon][:name] != @taxon.name || params[:taxon][:permalink] != @taxon.permalink
#
#       @taxon.create_icon(attachment: taxon_params[:icon]) if taxon_params[:icon]
#       @taxon.icon.update_attributes(taxon_params[:icon]) if taxon_params[:icon_attributes]
#       @taxon.create_menu_icon(attachment: taxon_params[:menu_icon]) if taxon_params[:menu_icon]
#       @taxon.menu_icon.update_attributes(taxon_params[:menu_icon_attributes]) if taxon_params[:menu_icon_attributes]
#       @taxon.update_attributes(taxon_params.except(:icon, :menu_icon))
#     end
#     if successful
#       flash[:success] = flash_message_for(@taxon, :successfully_updated)
#
#       # rename child taxons
#       rename_child_taxons if @update_children
#
#       respond_with(@taxon) do |format|
#         format.html { redirect_to edit_admin_taxonomy_url(@taxonomy) }
#         format.json { render json: @taxon.to_json }
#       end
#     else
#       respond_with(@taxon) do |format|
#         format.html { render :edit }
#         format.json { render json: @taxon.errors.full_messages.to_sentence, status: 422 }
#       end
#     end
#   end
#
#   private
#
#       def set_permalink_part
#         @permalink_part = @taxon.permalink.split('/').last
#       end
#
#       def taxon_params
#         params.require(:taxon).permit(permitted_taxon_attributes)
#       end
#
#       def load_taxon
#         @taxon = @taxonomy.taxons.find(params[:id])
#       end
#
#       def load_taxonomy
#         @taxonomy = Spree::Taxonomy.find(params[:taxonomy_id])
#       end
#
#       def set_position
#         new_position = params[:taxon][:position]
#         @taxon.child_index = new_position.to_i if new_position
#       end
#
#       def set_parent(parent_id)
#         @taxon.parent = Taxon.find(parent_id.to_i) if parent_id
#       end
#
#       def set_permalink_params
#         if params.key? 'permalink_part'
#           parent_permalink = @taxon.permalink.split('/')[0...-1].join('/')
#           parent_permalink += '/' unless parent_permalink.blank?
#           params[:taxon][:permalink] = parent_permalink + params[:permalink_part]
#         end
#       end
#
#       def rename_child_taxons
#         @taxon.descendants.each do |taxon|
#           reload_taxon_and_set_permalink(taxon)
#         end
#       end
#
#       def regenerate_permalink
#         reload_taxon_and_set_permalink(@taxon)
#         @update_children = true
#       end
#
#       def reload_taxon_and_set_permalink(taxon)
#         taxon.reload
#         taxon.set_permalink
#         taxon.save!
#       end
# end
