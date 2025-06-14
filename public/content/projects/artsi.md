This is an information system that allows user with their roles to manage Project, Content, Submission, Finance, Talent, and Client. This goal was to make a system where the internal team, freelancer, and client could see and manage their ongoing Projects without the hassle on un-integrity of using third party software.

## Architecture
This application follows a layered architecture pattern, separating concerns into:
- Controllers: Handling the HTTP Request
- Services: Processing the business logic
- Repositories: Data access layer
- Models: PostgrSQL schema definitions

The backend exposes a RESTful API, using JWT for stateless authentication. 

## Technologies Used
### Backend Stack:
- Language: TypeScript
- Framework: NestJS

### Frontend Stack:
- Language: TypeScript
- Framework: React 

### Database:
- Primary Database: PostgreSQL
- ORM: TypeORM

### Infrastructure:
- Hosting: Hosted on Vercel (front-end) and Heroku (back-end)

## Technical Flow
This section will explains example of how the system execution looks like.
### User Login
1. Clients send POST `/auth/login`
2. NestJS routes the request to login controller function and then gives the request to `authService` `validateUser` function
   ```
   @Public()
   @Post('login')
   async login(@Body() LoginDto: LoginDto, @Req() request: Request) {
      const user = await this.authService.validateUser(LoginDto);
      if (!user) {
         throw new FailedException("Email atau password salah!", HttpStatus.BAD_REQUEST, request.path);
      }
      return this.authService.login(user);
   }
   ```
3. The service will then will query using TypeORM to find the user in the database. If the user is found, it will compare the password from the request, hash it, and then compare it to hashed password in the system. 
   ```
   async validateUser(loginDto: LoginDto): Promise<User | null> {
   const user = await this.userRepository.findOne({
      where: {
            email: loginDto.email
      }
   })

   if (user && await bcrypt.compare(loginDto.password, user.hashedPassword)) {
      return user;
   } else { 
      return null;
   }
   }
   ```
4. If the user is found and the password is correct, then it will continue logging in the user by giving the user JWT Token using the credentials of the logged in user
   ```
   async login(user: User) {
         const payload: JwtPayload = {
            sub: user.id,
            email: user.email,
            role: user.role
         };
         return { 
            access_token: this.jwtService.sign(payload)
         }
      }
      ```
      The JWT token that is given to the clients is structured this way:
      ```
      {
   "sub": 1,
   "email": "direksi@gmail.com",
   "role": "DIREKSI",
   "iat": 1749828288,
   "exp": 1749831888
   }
   ```

## Lesson Learned
- Learned how to collaborate with 4 other people using version control and its features like issues, merge request
- Realized the importance of validation layers before hitting the DB