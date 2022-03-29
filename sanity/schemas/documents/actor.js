const actor = {
    title: 'Actor',
    name: 'actor',
    type: 'document',
    fields: [
        {
        title: 'Full name',
        name: 'name',
        type: 'string',
        description: 'Insert the full name of the actor',
        validation: (Rule) => Rule.required(),
        },
        {
        title: 'Name',
        name: 'slugname',
        type: 'slug',
        description: 'This is the URL-friendly format',
        validation: (Rule) => Rule.required(),
        }
  ]
}

export default actor