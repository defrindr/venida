/**
 * Venida Platform
 * Free Open Source Software
 * Auto Generated by SEJE - Digital
 */

import { Knex } from "knex";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex: Knex) {
    // Deletes ALL existing entries
    await knex("user").del();

    // Generating Seeder
    await knex("user").insert([
        {
            name: 'Super User',
            email: 'superuser@mail.com',
            password: 'thispassword',
            is_active: 1
        }
    ]);
};
