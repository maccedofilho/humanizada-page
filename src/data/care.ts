export const getAppointmentUrl = (care = '') =>
  'https://wa.me/5547988788752?text=' + encodeURIComponent(
    'Olá! Gostaria de agendar uma avaliação' + (care ? ' ' + care : '') + ' na Humanizada.',
  );

export const careCategories = [
  {
    value: 'facial',
    label: 'Facial',
    adjective: 'faciais',
    services: [
      { title: 'Toxina botulínica', description: 'Avaliação individual das linhas de expressão.' },
      { title: 'Preenchimento', description: 'Uma conversa sobre contornos e volumes.' },
      { title: 'Skinbooster', description: 'Converse sobre hidratação e qualidade da pele.' },
    ],
  },
  {
    value: 'corporal',
    label: 'Corporal',
    adjective: 'corporais',
    services: [
      { title: 'Drenagem linfática', description: 'Uma conversa sobre sua rotina e seus objetivos.' },
      { title: 'Contorno corporal', description: 'Avaliação individual dos cuidados com o corpo.' },
      { title: 'Qualidade da pele', description: 'Atenção à textura, à firmeza e às suas necessidades.' },
    ],
  },
] as const;
