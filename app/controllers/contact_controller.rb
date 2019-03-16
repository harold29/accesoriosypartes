class ContactController < ApplicationController
  def send_contact_email
    Spree::CustomMailer.with(contact: permitted_params).contact_email.deliver_now

    respond_to do |format|
      format.json { render json: "Email Sent"}
      format.html { redirect_to spree.root_path }
    end
  end

  private

  def permitted_params
    params.require(:contact).permit(:name, :email, :subject, :message)
  end
end
