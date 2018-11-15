module Ayp
  module Spree
    module ImageDecorator
      module ClassMethods
        def styles
          {
            mini: '150x150>',
            small: '300x300>',
            product: '600x600>',
            large: '1000x1000>',
          }
        end
      end

      def self.prepend(base)
        base.singleton_class.prepend ClassMethods
      end
    end
  end
end

# Spree::Image.class_eval do
#   attachment_definitions[:attachment][:styles] = {
#     mini: '48x48>', # thumbs under image
#     small: '100x100>', # images on category view
#     product: '240x240>', # full product image
#     large: '600x600>' # light box image
#   }
# end

Spree::Image.prepend ::Ayp::Spree::ImageDecorator
