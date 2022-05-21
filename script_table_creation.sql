/*-------Hospitals table-------*/
drop table if exists hospitals;
create table hospitals(
	id serial primary key ,
	name varchar(200) not null,
	location varchar(500) not null,
	pincode integer not null,
	category boolean not null,
	total_beds integer,
	total_beds_ICU integer,
	total_beds_normal integer,
	total_beds_ventilation integer,
	beds_available integer,
	beds_available_ICU integer,
	beds_available_normal integer,
	beds_available_ventilation integer
);
select * from information_schema.columns where table_name = 'hospitals';
/*alter table hospitals alter column pincode drop not null;*/
/*alter table hospitals alter column doctors_available drop not null;*/
alter table hospitals drop column doctors_available;
alter table hospitals alter column category type varchar(20);

/*-------Ambulances table-------*/
drop table if exists ambulances;
create table ambulances(
	id serial primary key,
	hospital_id integer,
	location varchar(500) not null,
	servicing boolean not null,
	name varchar(100) not null,
	contact varchar(100) not null,
	current_destination varchar(200) not null
);
alter table ambulances add constraint foreign_key_hospital
	foreign key(hospital_id) references hospitals(id)
	on delete set null on update cascade;
select * from information_schema.columns where table_name='ambulances';

/*-------Blood banks table-------*/
drop table if exists blood_banks;
create table blood_banks (
	id serial primary key,
	name varchar(200) not null,
	location varchar(500) not null,
	blood_groups  integer array not null
);
select * from information_schema.columns where table_name = 'blood_banks';
alter table blood_banks alter column blood_groups type integer[];
drop table blood_banks;

/*-------Patients table-------*/
drop table if exists patients;
create table patients(
	id serial primary key,
	name varchar(100) not null,
	contact integer not null,
	age integer not null,
	admission_category varchar(11) not null,
	hospital_id integer not null,
	address varchar(500) not null,
	doctor_id integer not null
);
alter table patients add constraint foreign_key_patients_hospital
	foreign key(hospital_id) references hospitals(id)
	on delete set null on update cascade;
alter table patients add constraint foreign_key_patients_doctors
	foreign key(doctor_id) references doctors(id)
	on delete set null on update cascade;
select * from information_schema.columns where table_name = 'patients';
alter table patients drop column address;

/*-------Doctors table-------*/
drop table if exists doctors;
create table doctors(
	id serial primary key,
	name varchar(100) not null,
	contact integer not null,
	age integer not null,
	specialisation varchar(100) not null,
	hospital_id integer,
	patients_id integer ARRAY
);
alter table doctors add constraint foreign_key_doctors_hospitals
	foreign key(hospital_id) references hospitals(id)
	on delete set null on update cascade;
alter table doctors add constraint foreign_key_doctors_patients
	foreign key(patients_id) references patients(id)
	on delete set null on update cascade;
select * from information_schema.columns where table_name = 'doctors';
/*alter table doctors drop column patients_id;*/

/*-------Reviews table-------*/
drop table if exists reviews;
create table reviews(
	id serial primary key,
	city varchar(50) not null,
	hospital_id integer not null,
	content varchar(700) not null
);
alter table reviews add constraint foreign_key_reviews_hospitals
	foreign key(hospital_id) references hospitals(id)
	on delete set null on update cascade;
	
/*-------Ambulance reviews table-------*/
drop table if exists ambulance_reviews;
create table ambulance_reviews(
	id serial primary key,
	location varchar(50) not null,
	ambulance_id integer not null,
	content varchar(700) not null
);
alter table ambulance_reviews add constraint foreign_key_ambulance_reviews_ambulances
	foreign key(ambulance_id) references ambulances(id)
	on delete set null on update cascade;

/*-------Blood donors table-------*/
drop table if exists blood_donors;
create table blood_donors(
	id serial primary key,
	first_name varchar(20) not null,
	last_name varchar(20) not null,
	gender varchar(20) not null,
	address varchar(50) not null,
	phone_number integer not null,
	blood_group varchar(2) not null,
	medical_history varchar(50) not null,
	scheduled_date date not null
);

/*-------Users table-------*/
drop table if exists users;
create table users(
	id serial primary key,
	first_name varchar(20) not null,
	last_name varchar(20) not null,
	gender varchar(15) not null,
	address varchar(50) not null,
	phone_number integer not null,
	password varchar(15) not null
);