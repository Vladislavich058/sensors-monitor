CREATE EXTENSION IF NOT EXISTS pgcrypto;
	
INSERT INTO public.users (password, role, username) 
VALUES (crypt('admin', gen_salt('bf')), 'admin', 'admin');

INSERT INTO public.users (password, role, username) 
VALUES (crypt('user', gen_salt('bf')), 'viwer', 'user');

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

