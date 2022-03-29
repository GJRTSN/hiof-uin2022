const movie = {
    title: 'Movie',
    name: 'movie',
    type: 'document',
    fields: [
        {
        title: 'Title',
        name: 'title',
        type: 'string',
        description: 'Insert the title of the movie',
        validation: (Rule) => Rule.required(),
        },
        {
            type: 'reference',
            description: 'Select which actor plays in this movie',
            name: 'actor',
            title: 'Actor',
            to: { type: 'actor' },
          }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'actor.name',
    },
}
}

export default movie