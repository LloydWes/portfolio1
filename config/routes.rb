Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static#a_propos'
  get 'a_propos', to: 'static#a_propos', as: 'a_propos'
  get 'contact', to: 'static#contact', as: 'contact'
  get 'mes_realisations', to: 'static#mes_realisation', as: 'mes_realisations'
  # get 'tests', to: 'static#tests'
end
