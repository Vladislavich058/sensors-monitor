CREATE DATABASE sensordb;

\c sensordb;

DROP TABLE IF EXISTS public.types;

CREATE TABLE IF NOT EXISTS public.types
(
    id bigint NOT NULL GENERATED ALWAYS AS IDENTITY,
    name character varying(255) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT types_pkey PRIMARY KEY (id),
    CONSTRAINT uk_17go525ou3scbmd4pcftq130f UNIQUE (name)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.types
    OWNER to postgres;

DROP TABLE IF EXISTS public.units;

CREATE TABLE IF NOT EXISTS public.units
(
    id bigint NOT NULL GENERATED ALWAYS AS IDENTITY,
    name character varying(255) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT units_pkey PRIMARY KEY (id),
    CONSTRAINT uk_etw07nfppovq9p7ov8hcb38wy UNIQUE (name)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.units
    OWNER to postgres;

DROP TABLE IF EXISTS public.users;

CREATE TABLE IF NOT EXISTS public.users
(
    id bigint NOT NULL GENERATED ALWAYS AS IDENTITY,
    password character varying(255) COLLATE pg_catalog."default" NOT NULL,
    role character varying(255) COLLATE pg_catalog."default" NOT NULL,
    username character varying(255) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT users_pkey PRIMARY KEY (id),
    CONSTRAINT uk_r43af9ap4edm43mmtq01oddj6 UNIQUE (username)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.users
    OWNER to postgres;

DROP TABLE IF EXISTS public.sensors;

CREATE TABLE IF NOT EXISTS public.sensors
(
    id bigint NOT NULL GENERATED ALWAYS AS IDENTITY,
    description character varying(200) COLLATE pg_catalog."default" NOT NULL,
    end_range integer NOT NULL,
    location character varying(40) COLLATE pg_catalog."default" NOT NULL,
    model character varying(15) COLLATE pg_catalog."default" NOT NULL,
    name character varying(30) COLLATE pg_catalog."default" NOT NULL,
    start_range integer NOT NULL,
    type_id bigint NOT NULL,
    unit_id bigint NOT NULL,
    CONSTRAINT sensors_pkey PRIMARY KEY (id),
    CONSTRAINT fk3mvhoabhaml4hjjjh75awe32v FOREIGN KEY (type_id)
        REFERENCES public.types (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fk466sx5l0tn9eu7hsod0jdiwos FOREIGN KEY (unit_id)
        REFERENCES public.units (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.sensors
    OWNER to postgres;

CREATE EXTENSION IF NOT EXISTS pgcrypto;
	
INSERT INTO public.users (password, role, username) 
VALUES (crypt('admin', gen_salt('bf')), 'admin', 'admin');

INSERT INTO public.users (password, role, username) 
VALUES (crypt('user', gen_salt('bf')), 'viewer', 'user');

INSERT INTO public.types(name)
VALUES ('Pressure');

INSERT INTO public.types(name)
VALUES ('Voltage');

INSERT INTO public.types(name)
VALUES ('Temperature');

INSERT INTO public.types(name)
VALUES ('Humidity');

INSERT INTO public.units(name)
VALUES ('bar');

INSERT INTO public.units(name)
VALUES ('voltage');

INSERT INTO public.units(name)
VALUES ('°С');

INSERT INTO public.units(name)
VALUES ('%');

INSERT INTO public.sensors(
	description, end_range, location, model, name, start_range, type_id, unit_id)
VALUES ('Description1', '16', 'Room1', 'PC33-56', 'Sensor 1', '0', 1, 1);

INSERT INTO public.sensors(
	description, end_range, location, model, name, start_range, type_id, unit_id)
VALUES ('Description2', '25', 'Room2', 'EH-567', 'Sensor 2', '-25', 2, 2);

INSERT INTO public.sensors(
	description, end_range, location, model, name, start_range, type_id, unit_id)
VALUES ('Description3', '50', 'Room3', 'TER-21', 'Sensor 3', '-70', 3, 3);

INSERT INTO public.sensors(
	description, end_range, location, model, name, start_range, type_id, unit_id)
VALUES ('Description4', '100', 'Room4', 'H94', 'Sensor 4', '0', 4, 4);

