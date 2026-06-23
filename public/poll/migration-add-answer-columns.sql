-- Migration: Add answer reveal columns to existing questions table
-- Run this in Supabase SQL Editor BEFORE running scambomb-trivia.sql

alter table questions 
add column if not exists answer_revealed boolean not null default false,
add column if not exists correct_answer text,
add column if not exists explanation text;