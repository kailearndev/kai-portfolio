import { motion } from 'framer-motion';
import React from 'react';

const Expertise = () => {
    return (
        <motion.div

            initial={{ opacity: 0, y: 100 }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                    duration: 1
                }
            }}
            className='flex flex-col gap-5 w-full'>
            <div className='text-3xl font-bold text-center'>
                Expertise.
            </div>
            <div className="flex flex-col gap-3">
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Brickmate Group VN
                    </div>
                    <div className="collapse-content">
                        <div className="mockup-code">
                            <pre data-prefix="$"><code className="uppercase">Brickmate Group VN</code></pre>
                            <pre data-prefix=">" className="text-warning"><code>web developer </code></pre>
                            <pre data-prefix=">" className="text-success"><code>2023 - now</code></pre>
                        </div>

                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        SCB Bank
                    </div>
                    <div className="collapse-content">
                        <div className="mockup-code">
                            <pre data-prefix="$"><code className="uppercase">SCB Bank</code></pre>
                            <pre data-prefix=">" className="text-warning"><code>web developer </code></pre>
                            <pre data-prefix=">" className="text-success"><code>2021 - 2022</code></pre>
                        </div>

                    </div>
                </div>

            </div>
            <div className="stats shadow stats-vertical md:stats-horizontal">
                <div className="stat place-items-center">
                    <div className="stat-title">Completed Project</div>
                    <div className="stat-value">10 +</div>

                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">My Projects</div>
                    <div className="stat-value text-secondary">4</div>

                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">Languages</div>
                    <div className="stat-value">5 +</div>

                </div>
            </div>
        </motion.div>
    );
};

export default Expertise;