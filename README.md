# **Superlevel: Social Media Performance Analysis**

## **Overview**  
Superlevel is a project developed for the Level Supermind Hackathon. It aims to provide insights into social media performance by analyzing engagement metrics using **Langflow** and **DataStax Astra DB**. The project focuses on building a basic analytics module to simulate and evaluate the performance of various types of social media posts.

---

## **Features**  
- **Engagement Data Simulation**: Simulated social media data, including likes, shares, and comments, stored in DataStax Astra DB.  
- **Post Performance Analysis**: Analyzes engagement metrics across different post types like carousels, reels, and static images using Langflow.  
- **AI-Powered Insights**: Utilizes GPT integration in Langflow to generate actionable insights, such as engagement comparisons among post types.  

---

## **Tech Stack**  
- **Database**: [DataStax Astra DB](https://www.datastax.com/)  
- **Workflow Creation**: [Langflow](https://www.langflow.org/)  
- **AI Integration**: GPT (via Langflow)  

---

## **How It Works**  
1. **Fetch Engagement Data**:  
   - A dataset simulating social media engagement is created, featuring metrics like likes, shares, and comments.  
   - Data is stored in **DataStax Astra DB** for efficient querying and scalability.

2. **Analyze Post Performance**:  
   - A Langflow workflow accepts post types (e.g., carousels, reels, static images) as input.  
   - Queries the Astra DB dataset to calculate average engagement metrics for each post type.  

3. **Generate Insights**:  
   - Using GPT, the system generates insights based on the analyzed data.  
   - Example outputs include:  
     - *"Carousel posts have 20% higher engagement than static posts."*  
     - *"Reels drive 2x more comments compared to other formats."*  

---

## **Setup Instructions**  
1. Clone the repository:  
   ```bash
   git clone https://github.com/varadpuranik123/superlevel.git
   cd superlevel
   ```

2. Install required dependencies:  
   ```bash
   pip install -r requirements.txt
   ```

3. Set up DataStax Astra DB:  
   - Create an account at [DataStax Astra DB](https://www.datastax.com/).  
   - Create a database and load the simulated dataset.  

4. Configure Langflow:  
   - Follow the setup guide at [Langflow Documentation](https://www.langflow.org/).  
   - Load the provided workflow file from this repository.

5. Run the application and explore the insights.

---

## **Demo**  
Check out the demo video on [YouTube](#). (Ensure the link to the video is public and accessible.)  

---

## **Submission Details**  
This project has been submitted as part of the **Level Supermind Hackathon** on [FindCoder](https://www.findcoder.io/).  

---

## **Contributors**  
- **Sahil Kshirsagar** – Full Stack Developer  
- **Shubham Sharma** – Backend Developer  
- **Varad Puranik** – Frontend Developer  
- **Prithviraj Daud** – UI/UX Designer  

---

Feel free to reach out for any queries or collaboration opportunities!  

**Website**: [Website](https://superlevel.vercel.app/) 
