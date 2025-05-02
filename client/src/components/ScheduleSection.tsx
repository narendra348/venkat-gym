import { useState } from "react";
import { Button } from "@/components/ui/button";
import { schedule } from "@/lib/data";

// Define types for schedule data
type ClassItem = {
  name: string;
  trainer: string;
  time: string;
  description: string;
  location: string;
};

type ScheduleData = {
  [key: string]: ClassItem[];
};

export default function ScheduleSection() {
  const [activeDay, setActiveDay] = useState<string>("monday");
  
  // Use local data directly with proper typing
  const scheduleData = schedule as ScheduleData;
  const isLoading = false;

  const weekdays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
  
  return (
    <section id="schedule" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl mb-4 reveal">CLASS <span className="text-primary">SCHEDULE</span></h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8 reveal"></div>
          <p className="text-lg max-w-3xl mx-auto reveal">Find the perfect class to fit your schedule. New members get a complimentary session with a personal trainer.</p>
        </div>
        
        {/* Schedule Tabs */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8 reveal">
          <div className="flex flex-nowrap overflow-x-auto border-b border-gray-200 pb-2">
            {weekdays.map((day) => (
              <button 
                key={day}
                className={`py-3 px-6 font-montserrat font-semibold text-dark hover:text-primary focus:outline-none transition-all whitespace-nowrap ${
                  activeDay === day ? 'text-primary border-b-2 border-primary' : ''
                }`}
                onClick={() => setActiveDay(day)}
              >
                {day.charAt(0).toUpperCase() + day.slice(1)}
              </button>
            ))}
          </div>
          
          {/* Schedule Content */}
          {isLoading ? (
            // Loading skeleton
            <div className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array(6).fill(0).map((_, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 animate-pulse">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <div className="h-5 bg-gray-300 rounded w-40 mb-2"></div>
                        <div className="h-4 bg-gray-300 rounded w-24"></div>
                      </div>
                      <div className="h-6 w-16 bg-gray-300 rounded-full"></div>
                    </div>
                    <div className="h-4 bg-gray-300 rounded w-full mb-3"></div>
                    <div className="flex justify-between items-center">
                      <div className="h-4 bg-gray-300 rounded w-20"></div>
                      <div className="h-6 w-14 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="mt-6">
              {weekdays.map((day) => (
                <div 
                  key={day}
                  className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${activeDay === day ? '' : 'hidden'}`}
                >
                  {scheduleData[day]?.map((classItem: ClassItem, index: number) => (
                    <div 
                      key={index}
                      className="border border-gray-200 rounded-lg p-4 hover:border-primary transition-all"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-montserrat font-bold text-lg">{classItem.name}</h4>
                          <p className="text-primary">{classItem.trainer}</p>
                        </div>
                        <span className="bg-secondary text-white px-3 py-1 rounded-full text-sm">{classItem.time}</span>
                      </div>
                      <p className="text-sm mb-3">{classItem.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">{classItem.location}</span>
                        <button className="text-white bg-primary hover:bg-primary/90 px-4 py-1 rounded-full text-sm transition-all">Book</button>
                      </div>
                    </div>
                  ))}

                  {/* Show a message if no classes are scheduled */}
                  {(!scheduleData?.[day] || scheduleData[day].length === 0) && (
                    <div className="col-span-full text-center py-8">
                      <p className="text-lg text-gray-500">No classes scheduled for {day.charAt(0).toUpperCase() + day.slice(1)}.</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="text-center reveal">
          <Button 
            asChild
            className="bg-primary hover:bg-primary/90 text-white font-montserrat font-semibold rounded-full"
          >
            <a href="#contact">BOOK YOUR FIRST CLASS</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
