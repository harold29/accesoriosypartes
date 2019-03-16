class Spree::CustomMailer < Spree::BaseMailer
  def contact_email
    @contact = params[:contact]
    subject = "Nuevo contacto de: #{@contact[:email]}"

    mail(to: from_address, from: from_address, subject: subject, template_name: 'contact_mail')
  end
end
