require 'rails_helper'

RSpec.describe '#GET /', type: :routing do
  context 'when the request is successfully processed' do
    it 'routes to the public offers list page' do
      expect(get: root_path).to route_to(controller: 'offers', action: 'index')
    end
  end
end
