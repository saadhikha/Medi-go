alter table hospitals alter column Pincode drop not null;
copy hospitals(id, Name, Location, Pincode, Category, total_beds_icu, total_beds_normal, total_beds_ventilation,
			   beds_available_icu, beds_available_normal, beds_available_ventilation)
	from 'C:\Beckn-a-thon\Hospitals_Dataset.csv'
	delimiter ',' csv header;
update hospitals set total_beds = total_beds_ICU + total_beds_normal + total_beds_ventilation;
update hospitals set beds_available = beds_available_ICU + beds_available_normal + beds_available_ventilation;
select * from hospitals;

copy ambulances(id, Name, Hospital_id, Location, Servicing, Contact, Current_Destination)
	from 'C:\Beckn-a-thon\Ambulances_Dataset.csv'
	delimiter ',' csv header;
select * from ambulances;

copy blood_banks(id, name, location, blood_groups)
	from 'C:\Beckn-a-thon\BloodBanks_Dataset.csv'
	delimiter ',' csv header;
select * from blood_banks;

copy patients(id, Name, Contact, Age, admission_category, hospital_id, doctor_id)
	from 'C:\Beckn-a-thon\Patients_Dataset.csv'
	delimiter ',' csv header;
select * from patients;

copy doctors(id, name, contact, age, specialisation, hospital_id)
	from 'C:\Beckn-a-thon\Doctors_Dataset.csv'
	delimiter ',' csv header;
select * from doctors;

copy reviews(id, city, hospital_id, content)
	from 'C:\Beckn-a-thon\Reviews_Dataset.csv'
	delimiter ',' csv header;
select * from reviews;

insert into blood_donors values(1, 'Saraswathi', 'Kalyanasundaram', 'Female', 
								'Ashwin Apartments, Mandaveli, Chennai', 0987654321, 'O+', 'Heart patient', 
							    '2021-Oct-13');
select * from users;						
insert into users values(1, 'Vinayak', 'Mehta', 'Male', 'Dinesh Apartments, Mambalam, Chennai', 0987654321, 
						 'sksabc');