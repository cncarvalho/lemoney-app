require 'rails_helper'

RSpec.describe '#GET edit', type: :request do
  context 'when the request is successfully processed' do
    before { get edit_admin_offer_path(1) }

    it 'returns an ok HTTP status code' do
      expect(response).to have_http_status(:ok)
    end
  end
end
