require 'rails_helper'

RSpec.describe '#GET index', type: :request do
  context 'when the request is successfully processed' do
    before { get admin_offers_path }

    it 'returns an ok HTTP status code' do
      expect(response).to have_http_status(:ok)
    end
  end
end
