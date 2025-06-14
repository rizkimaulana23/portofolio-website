This system is designed for the Database Course to teach students to make a system using purely SQL Query to understand
deeper on how to make an SQL Query in a much more real cases. In this case, I'm the one that design the system because I'm an
assistant lecturer for the Database course in my university.

## Architecture
The architecture of this project is unusual because the main point of this project is to understand the SQL Query thinking process and logic, not the system itself.
- Client: the client is using a front-end framework for the User Interface. The client will store all of its functions in the form of SQL Query. Then, the client will send POST request that has those SQL queries in the request body.
- Endpoint: this system only have 1 endpoint, that is `/query`. This endpoint with receive POST request that has SQL Query in the body. This endpoint then will sends information to the database.
- Database: the database will do all of its business logic and operation. Getting, creating, updating, deleting, trigger, and routines will happen in the database. The endpoint will only act as the intermediary to send message to the database.

## Technologies Used
### Backend Stack:
- Language: JavaScript
- Framework: ExpressJS

### Frontend Stack:
- Language: TypeScript
- Framework: React 

### Database:
- Primary Database: PostgreSQL

### Infrastructure:
- Hosting: All of the system is hosted in Vercel

## Technical Flow
This section will explains example of how the system execution looks like.
### Getting Client Dat 
1. Clients store all of the SQL Queries.
   ```
   export const getAllAnimalKlien = async (email: string) => {
      try {
         const sql = `
               SELECT 
                  CASE
                     WHEN i.no_identitas_klien IS NOT NULL THEN 
                           CONCAT(i.nama_depan, ' ', COALESCE(i.nama_tengah || ' ', ''), i.nama_belakang)
                     WHEN p.no_identitas_klien IS NOT NULL THEN p.nama_perusahaan
                     ELSE 'Unknown Owner'
                  END AS "pemilik",
                  k.no_identitas AS "idPemilik",
                  jh.nama_jenis AS "jenis",
                  h.nama AS "nama",
                  h.tanggal_lahir AS "tanggalLahir",
                  h.url_foto AS "foto"
               FROM 
                  hewan h
               JOIN 
                  jenis_hewan jh ON h.id_jenis = jh.id
               JOIN 
                  klien k ON h.no_identitas_klien = k.no_identitas
               LEFT JOIN 
                  individu i ON k.no_identitas = i.no_identitas_klien
               LEFT JOIN 
                  perusahaan p ON k.no_identitas = p.no_identitas_klien
               WHERE 
                  k.email ='${email}'
               ORDER BY 
                  h.nama;
         `
         const result = await query(sql);
         return result.data;
      } catch (error: any) {
         console.error("Failed to fetch Animal: " + error.message);
         throw error;
      }
   }
   ```
2. When the client want to do some operation, it execute the `query` function that sends the SQL Queries to the backend's endpoint
   ```
   export const query = async (query: string) => {
      try {
         const response = await api.post("", {
            query: `${query}`
         });
         
         if (response.data.success) {
            console.log("DATA DARI BACK END");
            console.log(response.data)
            return {
            data: response.data.data, // Akan selalu dalam bentuk array yang mana object dalam array-nya adalah Object dari row hasil tersebut
            rowCount: response.data.rowCount // Banyaknya Object yang ada dalam array data tersebut
            };
         } else {
            throw new Error(response.data.error || "Query execution failed");
         }
      } catch (error: any) {
         const errorMessage = error.response?.data?.error || error.message || "An unknown error occurred";
         console.error(`Query error: ${errorMessage}`);
         throw new Error(errorMessage);
      }
   }
   ```
3. The backend will receive the SQL Query and then execute it in the database
   ```
   app.post('/query', async (req, res) => {
      try {
         const { query } = req.body;
         console.log('Query executed:', query);
         
         if (!query) {
            return res.status(400).json({ error: 'Query is required' });
         }
         
         const result = await pool.query(query);
         res.json({
            success: true,
            data: result.rows,
            rowCount: result.rowCount
         });
      } catch (error) {
         console.error('Error executing query:', error);
         res.status(500).json({
            success: false,
            error: error.message
         });
      }
   });
   ```

## Lesson Learned
- Understanding data formatting is important when dealing with freely typed SQL Queries result