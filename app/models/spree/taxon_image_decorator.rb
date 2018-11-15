# Spree::TaxonImage::Configuration::ActiveStorage.module_eval do
#   def self.styles
#     @styles ||= {
#       mini:   '100x100>',
#       normal: '300x300>'
#     }
#   end
# end
module Ayp
  module Spree
    module TaxonImageDecorator
      module ClassMethods
        def styles
          {
            mini:    '48x48>',
            small:   '100x100>',
            product: '240x240>',
            large:   '600x600>',
          }
        end
      end
      def self.prepended(base)
        base.singleton_class.prepend ClassMethods
      end
    end
  end
end

Spree::TaxonImage.prepend ::Ayp::Spree::ImageDecorator
