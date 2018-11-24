Spree::Api::V1::ImagesController.class_eval do
  def create
    # authorize! :create, Image

    Rails.logger.info "FUEGOOOOOOOOOOOOOo " + image_params.inspect
    file = image_params.attachment

    respond_to do |format|
        format.json {render :json => {:response => 'Potato de Fuego'} }     #how to pass json response here.
      end
  end
end
