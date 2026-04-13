import { motion } from 'framer-motion';
import '../styles/Activities.css';

const Activities = () => {
  const activities = [
    {
      title: 'Design Workshop Facilitator',
      desc: 'Hosted monthly workshops teaching basic UI/UX principles to local community members and students.',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Open Source Contributor',
      desc: 'Created and maintained several popular open-source design resource packs for Figma and Adobe XD.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Creative Hackathon Judge',
      desc: 'Participated as a guest judge in national design hackathons evaluating innovation and user-centric design.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <section id="activities">
      <h2 className="section-title">Activities</h2>
      <div className="activities-grid">
        {activities.map((act, index) => (
          <motion.div 
            className="activity-card" 
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <img src={act.image} alt={act.title} className="act-image" />
            <div className="act-content">
              <h3 className="act-title">{act.title}</h3>
              <p className="act-desc">{act.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Activities;
