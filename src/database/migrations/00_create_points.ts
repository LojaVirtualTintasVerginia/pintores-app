import { Knex } from 'knex'

export async function up(knex: Knex) {
 return knex.schema.createTable('points', table => {
  table.increments('id').primary()
  table.string('image')
  table.string('image2')
  table.string('email')
  table.string('name')
  table.string('resumo')
  table.string('cpf')
  table.string('whatsapp')
  table.string('city')
  table.string('uf', 2)
  table.string('link_facebook')
  table.string('link_instagram')
  table.boolean('ativo')
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('points')
}
